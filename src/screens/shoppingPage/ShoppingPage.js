import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ShopImage from '../../assets/images/gareeb.jpg';
import WishlistIcon from '../../assets/images/love.png';
import sortIcon from '../../assets/images/sort.png';
import filterIcon from '../../assets/images/filter.png';

const ShoppingPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getApiData = async () => {
    try {
      const url =
        'https://storeapi.wekreta.in/api/v4/product/customer?id=0&secondaryKey=3d70712a-26fb-11ee-b277-029ff3b26cce&productName=&categoryName=serveware,kitchenware&subCategoryName=&subSubCategoryName=&brandName=&isFeatured=0&search=&currentPage=1&itemsPerPage=27&sortBy=createdDate&sortOrder=desc&isFetchListing=0&searchTag=&storeUuid=cb910d4a-bf60-11ed-814d-0252190a7100';
      let result = await fetch(url);
      result = await result.json();

      setData(result.object);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text>98/100 Products</Text>
        <View style={styles.sortContainer}>
          <View style={styles.iconSortFilter}>
            <Image source={sortIcon} style={styles.icon}/>
            <Text>Sort</Text>
          </View>
          <View style={styles.iconSortFilter}>
            <Text>Filter</Text>
            <Image source={filterIcon} style={styles.icon}/>
          </View>
        </View>
      </View>

      {loading ? ( // Check if data is still loading
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={styles.loadingIndicator}
        />
      ) : (
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({item}) => (
            <View style={styles.imageMainContainer}>
              <View>
                <View style={styles.imageContainer}>
                  <Image source={{uri: item.mediaUrl}} style={styles.image} />
                  <Image source={WishlistIcon} style={styles.wishlist} />
                </View>
                <Text style={styles.dressTitle}>{item.name}</Text>
                <Text style={styles.dressName}>{item.description}</Text>
                <Text style={styles.dressType}>Shorts</Text>
                <Text style={styles.dressPrice}>
                  ₹{item.variants[0].sellingPrice}
                </Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default ShoppingPage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  sortContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  icon:{
    height: 15,
    width: 15
  },
  iconSortFilter:{
    flexDirection: 'row',
    gap: 2
  },
  imageMainContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    padding: 8,
  },
  imageContainer: {
    backgroundColor: 'pink',
    height: 240,
    width: 165,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  wishlist: {
    position: 'absolute',
    height: 25,
    width: 25,
    right: 10,
    top: 10,
  },
  dressTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
  },
  dressName: {
    fontSize: 18,
  },
  dressType: {
    fontSize: 18,
  },
  dressPrice: {
    fontSize: 18,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
