import axios from "axios";
axios.defaults.headers.common['X-Requested-With']='XMLHttprequest';
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;