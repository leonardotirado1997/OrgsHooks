import React from "react";
import { StyleSheet, View } from 'react-native';

import { useState } from "react";

import Star from "./Star";

type StarsProps = {
    quantity: number;
    editable?: boolean;
    large?: boolean;
};

export default function Stars({
    quantity: oldQuantity,
    editable = false,
    large = false,
}: StarsProps) {

    const [quantity, setQuantity] = useState(oldQuantity);

    const RenderStars = () => {
        const starsList = [];
        for (let i = 0; i < 5; i++) {
            starsList.push(
                <Star
                    key={i}
                    onPress={() => setQuantity(i + 1)}
                    disabled={!editable}
                    filled={i < quantity}
                    large={large}
                />
            );
        }
        return starsList;
    };

    return <View style={styles.stars}>
        <RenderStars />
    </View>;
}

const styles = StyleSheet.create({
    stars: {
        flexDirection: 'row',
    },
});