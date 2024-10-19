import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import React from 'react';
import HeaderMain from '../../../components/Header/HeaderMain';

const notify1 = [
    {
        id: 1,
        icon: require('../../../assets/icons/icons8-notification-100.png'),
        title: 'Special Offer',
        time: 'Today 10:30PM',
    },]

const notify = [
    {
        id: 1,
        icon: require('../../../assets/icons/icons8-notification-100.png'),
        title: 'Special Offer',
        time: 'Today 10:30PM',
    },
    {
        id: 2,
        icon: require('../../../assets/icons/icons8-notification-100.png'),
        title: 'Special Offer',
        time: 'Today 10:30PM',
    },
    {
        id: 3,
        icon: require('../../../assets/icons/icons8-notification-100.png'),
        title: 'Special Offer',
        time: 'Today 10:30PM',
    },
    {
        id: 4,
        icon: require('../../../assets/icons/icons8-notification-100.png'),
        title: 'Special Offer',
        time: 'Today 10:30PM',
    },
    {
        id: 5,
        icon: require('../../../assets/icons/icons8-notification-100.png'),
        title: 'Special Offer',
        time: 'Today 10:30PM',
    },
    {
        id: 6,
        icon: require('../../../assets/icons/icons8-notification-100.png'),
        title: 'Special Offer',
        time: 'Today 10:30PM',
    },
    {
        id: 7,
        icon: require('../../../assets/icons/icons8-notification-100.png'),
        title: 'Special Offer',
        time: 'Today 10:30PM',
    },
    {
        id: 8,
        icon: require('../../../assets/icons/icons8-notification-100.png'),
        title: 'Special Offer',
        time: 'Today 10:30PM',
    },
    {
        id: 9,
        icon: require('../../../assets/icons/icons8-notification-100.png'),
        title: 'Special Offer',
        time: 'Today 10:30PM',
    },

];

const NotificationScreen = ({ navigation }) => {
    const SpecialHeader = () => {
        return (
            <View>
                <View style={{ marginTop: 19, marginBottom:10 }}>
                    <Text style={{ fontSize: 12, color: 'black', fontWeight: '600', paddingHorizontal: 10, }}>Today</Text>
                    <View>
                        <FlatList data={notify1}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ backgroundColor: '#D8D8D8', height: 57, borderRadius: 6, marginTop: 10, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
                                        <View>
                                            <Image source={require('../../../assets/icons/icons8-notification-100.png')} style={{ width: 20, height: 20, }} />
                                        </View>
                                        <View style={{ marginLeft: 10 }}>
                                            <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold' }}>{item.title}</Text>
                                            <Text style={{ fontSize: 12, color: 'black', fontWeight: '300' }}>{item.time}</Text>
                                        </View>
                                    </View>
                                )
                            }} />
                    </View>
                </View>
                <Text style={{ fontSize: 12, color: 'black', fontWeight: '600', paddingHorizontal: 10, }}>Yesterday</Text>

            </View>
        )
    }
    return (
        <View style={styles.page}>
            <HeaderMain title={'Notifications'} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                <TouchableOpacity>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>Last 30 Days</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'red' }}>All Marks As Read</Text>
                </TouchableOpacity>
            </View>



            <View style={{ marginTop: 19, marginBottom: 110 }}>
                <View>
                    <FlatList data={notify}
                        ListHeaderComponent={SpecialHeader}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ backgroundColor: '#D8D8D8', height: 57, borderRadius: 6, marginTop: 10, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
                                    <View>
                                        <Image source={require('../../../assets/icons/icons8-notification-100.png')} style={{ width: 20, height: 20, }} />
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold' }}>{item.title}</Text>
                                        <Text style={{ fontSize: 12, color: 'black', fontWeight: '300' }}>{item.time}</Text>
                                    </View>
                                </View>
                            )
                        }} />
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 12, color: 'black' }}>See More</Text>
            </View>
        </View>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
    page: {
        paddingHorizontal: 20,
        paddingTop: 20,
        flex: 1,
        backgroundColor: '#F9F9F9',
    },
});