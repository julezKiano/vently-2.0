import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { BottomNavigation, Header, EventCard } from './components';
import { Entypo, Feather } from '@expo/vector-icons';
import { Icon } from 'native-base';

const EVENTS_DATA = [
    {
        date: 'Tomorrow',
        locationName: 'Ngong Racecourse',
        name: 'Jameson Connects Live: TY DOLLA $ign',
        price: 'KES 500 - KES 3000',
        banner: 'https://i2.wp.com/www.mwendengao.com/wp-content/uploads/2017/11/Ty-Dolla-Sign-Jameson-Connects-Kenya.jpg?resize=1080%2C1080'
    },
    {
        date: '23rd Feb',
        locationName: 'Training Grounds',
        name: 'Safaricom International Jazz Festival',
        price: 'KES 500 - KES 2000',
        banner: 'https://scontent.fnbo2-1.fna.fbcdn.net/v/t1.0-9/27752258_10159969802625084_4734251870543737453_n.jpg?oh=a5b13a9ef02e4ff32030622813c728a5&oe=5B2293AD'
    },
]

class BrowseTab extends Component {

    state = {
        refreshing: false
    }

    _renderCenterComponent = () => {
        const {
            selectorContainer,
            selectorTextStyle,
            selectorIconStyle
        } = styles;
        const {
            navigation
        } = this.props;
        return (
            <TouchableOpacity onPress={() => navigation.navigate('filter')} style={selectorContainer}>
                <Text style={selectorTextStyle}>Selected for you</Text>
                <View style={selectorIconStyle}>
                    <Entypo name="chevron-small-down" size={24} color="#212121" />
                </View>
            </TouchableOpacity>
        );
    }

    // _renderRightComponent = () => {
    //     return (
    //         <TouchableOpacity>
    //             <Feather name="filter" size={24} color="#212121" />
    //         </TouchableOpacity>
    //     )
    // }

    _renderItem = ({ item, index }) => {
        const {
            date,
            locationName,
            name,
            price,
            banner,
        } = item;
        return (
            <EventCard
                date={date}
                locationName={locationName}
                name={name}
                price={price}
                banner={banner}
                onEventPress={() => console.log('event pressed')}
                onBookmarkPress={() => console.log('bookmark pressed')}
                onSharePress={() => console.log('share pressed')}
            />
        )
    }

    _renderSeparator = () => <View style={styles.separatorStyle} />

    _handleRefresh = () => {
        console.log('refreshing...');
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header
                        centerComponent={this._renderCenterComponent}
                    />
                    <FlatList
                        data={EVENTS_DATA}
                        extraData={this.state}
                        keyExtractor={(item, index) => index}
                        renderItem={this._renderItem}
                        ItemSeparatorComponent={this._renderSeparator}
                        refreshing={this.state.refreshing}
                        onRefresh={this._handleRefresh}
                    />
                </View>
                <BottomNavigation navigation={navigation} active='browse' />
            </View>
        );
    }
}

const styles = {
    selectorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectorTextStyle: {
        fontFamily: 'nregular',
        color: '#212121',
        fontSize: 16
    },
    selectorIconStyle: {
        position: 'relative', top: 2
    },
    separatorStyle: {
        marginVertical: 5
    }
}

export default BrowseTab;
