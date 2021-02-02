import { fetchNewsList, fetchAskList, fetchJobsList } from "../api"

export default {
    FETCH_NEWS({ commit }){
        fetchNewsList()
            .then(res => {
                commit('SET_NEWS', res.data);
            })
            .catch(err => {
                console.log(err);
            })
    },
    FETCH_ASK({ commit }){
        fetchAskList()
            .then(res => {
                commit('SET_ASK', res.data);
            })
            .catch(err => {
                console.log(err);
            })
    },
    FETCH_JOBS({ commit }){
        fetchJobsList()
            .then(res => {
                commit('SET_JOBS', res.data);
            })
            .catch(err => {
                console.log(err);
            })
    },
}