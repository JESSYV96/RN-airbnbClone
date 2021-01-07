export type RootStackParamList = {
  Home: undefined;
  DestinationSearch: undefined;
  Guests: undefined;
  SearchResult: undefined;
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type PostType = {
  id: string;
  image: string;
  type: string;
  title: string;
  longDescription: string;
  bed: number;
  bedroom: number;
  oldPrice: number;
  newPrice: number;
  totalPrice: number;
  coordinate: {
    latitude: number;
    longitude: number;
  },
}
