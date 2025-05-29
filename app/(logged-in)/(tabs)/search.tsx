import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React, { JSX, useEffect, useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
//api
import { COMMON_INIT_RESPONSE } from "@/api";
import { getMoreYouTubeVideosBySearch } from "@/api/getMoreYouTubeVideoBySearch";
import { getYouTubeVideosBySearch } from "@/api/getYouTubeVideosBySearch";
//styles
import { theme } from "@/constants/theme";
//types
import { ICommonResponse } from "@/types/api";
import { status } from "@/types/enums";
import { IVideo } from "@/types/videos";
//components
import PoppinsRegular from "@/components/_common/fonts/PoppinsRegular";
import PoppinsSemiBold from "@/components/_common/fonts/PoppinsSemiBold";
import FilterModal from "@/components/search/FilterModal";
import SearchResults from "@/components/search/SearchResults";

const searchIcon = require("../../../assets/icons/search-icon.svg");

const Search: React.FC = (): JSX.Element => {
  const { sortBy, query, maxResults, nextPageToken } = useLocalSearchParams();

  // Ensure params are always strings
  const sortByStr = Array.isArray(sortBy) ? sortBy[0] : sortBy;
  const queryStr = Array.isArray(query) ? query[0] : query;
  const maxResultsStr = Array.isArray(maxResults) ? maxResults[0] : maxResults;
  const nextPageTokenStr = Array.isArray(nextPageToken)
    ? nextPageToken[0]
    : nextPageToken;

  const [isModalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [videosResponse, setVideosResponse] =
    useState<ICommonResponse<IVideo[] | null>>(COMMON_INIT_RESPONSE);
  const [moreVideosResponse, setMoreVideosResponse] =
    useState<ICommonResponse<IVideo[] | null>>(COMMON_INIT_RESPONSE);
  const [filterBy, setFilterBy] = useState<string>("Most Popular");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    const abortController = new AbortController();
    if (searchText.length) {
      getYouTubeVideosBySearch(
        setVideosResponse,
        abortController,
        filterBy,
        searchText,
        10
      );
      return () => {
        abortController.abort();
      };
    }
  }, [searchText, filterBy]);

  useEffect(() => {
    const abortController = new AbortController();
    let checkAgain: number;
    if (videosResponse.status === status.REJECTED && searchText.length) {
      checkAgain = setTimeout(() => {
        getYouTubeVideosBySearch(
          setVideosResponse,
          abortController,
          filterBy,
          searchText,
          10
        );
      }, 15000);
    }
    return () => {
      if (checkAgain) {
        clearTimeout(checkAgain);
        abortController.abort();
      }
    };
  }, [videosResponse.status, searchText, filterBy]);

  useEffect(() => {
    const abortController = new AbortController();
    if (sortByStr && queryStr && maxResultsStr && nextPageTokenStr) {
      getMoreYouTubeVideosBySearch(
        setMoreVideosResponse,
        abortController,
        sortByStr,
        queryStr,
        Number(maxResultsStr),
        nextPageTokenStr
      );
      return () => {
        abortController.abort();
      };
    }
  }, [sortByStr, queryStr, maxResultsStr, nextPageTokenStr]);

  useEffect(() => {
    const abortController = new AbortController();
    let checkAgain: number;
    if (
      moreVideosResponse.status === status.REJECTED &&
      sortByStr &&
      queryStr &&
      maxResultsStr &&
      nextPageTokenStr
    ) {
      checkAgain = setTimeout(() => {
        getMoreYouTubeVideosBySearch(
          setMoreVideosResponse,
          abortController,
          sortByStr,
          queryStr,
          Number(maxResultsStr),
          nextPageTokenStr
        );
      }, 15000);
    }
    return () => {
      if (checkAgain) {
        clearTimeout(checkAgain);
        abortController.abort();
      }
    };
  }, [
    searchText,
    filterBy,
    sortByStr,
    queryStr,
    maxResultsStr,
    nextPageTokenStr,
    moreVideosResponse.status,
  ]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        onChangeText={setSearchText}
        value={searchText}
      />
      <Image
        source={searchIcon}
        style={styles.searchIcon}
        contentFit="cover"
        accessibilityLabel="Search icon"
        accessibilityHint="Icon for search"
      />
      <Pressable onPress={toggleModal} style={styles.sortContainer}>
        <PoppinsRegular styles={styles.sortBy}>Sort by:</PoppinsRegular>
        <PoppinsSemiBold styles={styles.sortBy}>{filterBy}</PoppinsSemiBold>
      </Pressable>
      <SearchResults videosResponse={videosResponse} searchText={searchText} />
      {sortByStr && queryStr && maxResultsStr && nextPageTokenStr && (
        <SearchResults
          videosResponse={moreVideosResponse}
          searchText={searchText}
        />
      )}
      <FilterModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        setFilter={setFilterBy}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(24),
    backgroundColor: theme.color.white,
    paddingTop: moderateScale(10),
  },
  searchBar: {
    width: "100%",
    height: moderateScale(44),
    borderRadius: moderateScale(16),
    borderWidth: moderateScale(2),
    borderColor: theme.color.darkBlue,
    justifyContent: "center",
    backgroundColor: "transparent",
    textAlign: "center",
    marginBottom: moderateScale(20),
  },
  searchIcon: {
    height: moderateScale(24),
    width: moderateScale(24),
    position: "absolute",
    left: moderateScale(38),
    top: moderateScale(20),
  },
  pressableSearchBar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
  },
  sortContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: moderateScale(12),
  },
  sortBy: { fontSize: theme.fontSize.twelve, color: theme.color.darkBlue },
  customBackDrop: {
    flex: 1,
    backgroundColor: "black",
  },
  modal: {
    width: moderateScale(320),
    height: moderateScale(400),
    backgroundColor: theme.color.gray,
    borderRadius: moderateScale(24),
    paddingHorizontal: moderateScale(24),
    paddingVertical: moderateScale(32),
  },
});
