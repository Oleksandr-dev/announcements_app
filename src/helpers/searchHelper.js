import React from 'react'

export const SimilarAnnouncements = (searchResult, allannounces) => {
    const announces = allannounces.filter(anounce => {
        let sameAnounce = searchResult.filter(result => {
            if (result.id === anounce.id) return true
        })
        if(sameAnounce.length === 0) return true
    })
    const similar = new Set()

    searchResult.forEach((searched) => {
        let searchResultTitleSplit = searched.title.split(' ')
        console.log(searchResultTitleSplit)
        for (let key of searchResultTitleSplit) {

            announces.forEach((announce) => {
                console.log(typeof  announce.title)
                console.log(typeof key)
                console.log((announce.title).includes(key))
                if (announce.title.toLowerCase().includes(key.toLowerCase())) {
                    let searchResultTextSplit = searched.text.split(' ')
                    for (let key of searchResultTextSplit) {

                        if (announce.text.includes(key.toLowerCase())) {
                            similar.add(announce)

                        }
                    }

                }
            })
        }
    })
    const arrSimilarAnounces = []
    similar.forEach((setIt => arrSimilarAnounces.push(setIt)))

    return arrSimilarAnounces
}
