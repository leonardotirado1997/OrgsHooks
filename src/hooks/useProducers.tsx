import { useEffect, useState } from 'react';
import { loadProducers } from '../services/loadData';

export type ProducerItem = {
    name: string;
    image: any;
    distance: string;
    stars: number;
};

export default function useProducers(): [string, ProducerItem[]] {
    const [title, setTitle] = useState('');
    const [list, setList] = useState<ProducerItem[]>([]);

    useEffect(() => {
        const result = loadProducers();
        setTitle(result.title);
        setList(result.list);
    }, []);

    return [title, list];
}