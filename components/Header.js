import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Header() {
    // to keep track of the state
    const [activeTab, setActiveTab] = useState("Delivery");
    return (
        <View style={{flexDirection: "row", alignSelf:"center"}}>
            {/*first button*/}
            <HeaderButton 
               text="Delivery" 
               btnColor="black" 
               textColor="white" 
               activeTab={activeTab} 
               setActiveTab={setActiveTab}
            />

            {/*second button*/}

            <HeaderButton 
                text="Pickup" 
                btnColor="white" 
                textColor="black"
                activeTab={activeTab} 
                setActiveTab={setActiveTab}
            />
        </View>
    )
}

const HeaderButton = (props) => 
                <TouchableOpacity 
                    style={{
                        backgroundColor: props.activeTab === props.text ? "black" : "white",
                        paddingVertical: 7,
                        paddingHorizontal: 17,
                        borderRadius: 32,
                    }}
                    //on press we changing what the active tab is, based on the button we click
                    onPress={() => props.setActiveTab(props.Text)}
                    >
                   <Text 
                     style={{ 
                        color: props.activeTab === props.text ? "white" : "black",
                        fontSize: 16, 
                        fontWeight: "900",
                    }}
                    >
                        {props.text}
                    </Text>
                </TouchableOpacity>  
           

