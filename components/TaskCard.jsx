import { View, Text, Dimensions, Image } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const scale = size => (width / 375) * size;

export default function TaskCard({ image, title, time }) {
    return (
        <View style={{ width: scale(350), height: scale(60), backgroundColor: '#262626', borderRadius: 10, padding: scale(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: scale(12) }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={image}
                    style={{ width: scale(50), height: scale(50), borderRadius: 5 }}
                />
                <View style={{ marginLeft: scale(15) }}>
                    <Text style={{ fontFamily: 'medium', fontSize: scale(14), color: '#fff' }}>
                        {title}
                        {"\n"}
                        <Text style={{ fontFamily: 'regular', fontSize: scale(13), color: '#878787' }}>
                            {time}
                        </Text>
                    </Text>
                </View>
            </View>
            <Ionicons name="chevron-forward" size={scale(24)} color="#878787" />
        </View>
    );
}
