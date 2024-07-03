import axios from "axios";
import {API_URL} from '../config.jsx'


function findAll(element) {
    return axios
        .get(API_URL+element)
        .then(response => response.data["hydra:member"]);
}
function findOne(element, id) {
    return axios
        .get(API_URL+element+"/"+id)
        .then(response => response.data);
}
function findSlider(valeur) {
    return axios
        .get(API_URL+"sliders", { params: { sliderName : valeur }})
        .then(response => response.data["hydra:member"]);
}
function findTeam(valeur) {
    return axios
        .get(API_URL+"users", { params: { roles : valeur }})
        .then(response => response.data["hydra:member"]);
}
function postMessage(message){
    return axios
        .post(API_URL+"messages", message)
        .then(response => response.status);
}

export default {
    findAll,
    postMessage,
    findOne,
    findSlider,
    findTeam
}