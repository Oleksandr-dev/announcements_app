import React, {useContext} from 'react'
import {GlobalContext} from '../../context/GlobalState';
import {Announce} from '../atoms/Announce';


export const SearchedAnnounces = () => {
    const {searchResult, announces} = useContext(GlobalContext);

    const SimilarAnnounce = () => {
        let similar = []
        searchResult.forEach((sarched) => {
            if (similar.length > 3) return
            let searchResultTitleSplit = sarched.title.split(' ')

            for (let key of searchResultTitleSplit) {
                announces.forEach((announce) => {
                    if (announce.title.includes(searchResultTitleSplit[key]) && sarched.id !== announce.id) {

                        let searchResultTextSplit = sarched.text.split(' ')
                        for (let key of searchResultTextSplit) {
                            if (announce.text.includes(searchResultTitleSplit[key])) {
                                similar.push(announce)
                            }
                        }

                    }
                })
            }


            /*announces.forEach((announce) => {
                if(similar.length > 3) return
                let announceTitleSplit = announce.title.split(' '),
                    announceSplit = announce.title.split(' ')
                for (let key1 of searchResultTitleSplit) {
                    for (let key2 of announceTitleSplit) {
                        if(searchResultTitleSplit[key1] === announceTitleSplit[key2]) similar.push(announce)
                        if(similar.length > 3) break
                    }
                    if(similar.length > 3) break
                }
            })*/
        })


        return similar
    }
    const simil = SimilarAnnounce().map(announce => (
        <Announce key={announce.id} announce={announce}/>))

    return (
        <>
            <h3>Search result</h3>
            <div className='form-control'>

                <ul className='list'>
                    {searchResult.map(announce => (
                        <Announce key={announce.id} announce={announce}/>))}
                </ul>
            </div>
            <h3>Similar announcements</h3>
            <div className='form-control'>

                <ul className='list'>{simil}</ul>
            </div>
        </>
    )
}