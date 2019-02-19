import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { thumbnail_image, title, artist, image, url } = album;
    const { topRowContainer, topTitlesContainer, thumbnailContainer, titleStyle, imageStyle, buttonStyling } = styles;
    return (<Card>
        <View style={topRowContainer} >
            <Image style={thumbnailContainer} source={{ uri: thumbnail_image }} />
            <View style={topTitlesContainer}>
                <Text style={titleStyle}> {title} </Text>
                <Text> {artist} </Text>
            </View>
        </View>
        <Image style={imageStyle} source={{ uri: image }} />
        <View style={buttonStyling} >
            <Button executeMethod={() => Linking.openURL(url)} >
                BuyNow
        </Button>
        </View>

    </Card>);
};


export default AlbumDetail;

const styles = {
    topRowContainer: {
        flexDirection: 'row'
    },
    topTitlesContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailContainer: {
        width: 50,
        height: 50,
        margin: 10
    },
    titleStyle: {
        fontSize: 18
    },
    buttonStyling: {
        marginBottom: 10
    },
    imageStyle: {
        height: 300,
        flex: 0,
        width: null,
        margin: 10
    }
};

