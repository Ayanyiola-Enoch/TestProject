import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Test = () => {

    const RenderHeader = () => {
        return (
            <View>
                <View>
                    {/* THE SHOP IMAGE  */}
                </View>
                <FlatList data={['All', 'Men','']}
                    renderItem={({item})}

                />
                <FlatList />
            </View>
        )
    }




    return (
        <View>
            <View>

            </View>
            <FlatList
                data={['']}
                ListHeaderComponent={RenderHeader}
            />


        </View>
    )
}

export default Test

const styles = StyleSheet.create({})