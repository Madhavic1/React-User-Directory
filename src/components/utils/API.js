import axios from 'axios';

const url = "https://randomuser.me/api/?results=10";

export default {
    search: function() {
        console.log(url)
        return axios.get(url);
      },
   compareByName : function(a, b) {
        // Use toUpperCase() to ignore character casing
        const nameA = a.name.first.toUpperCase();
        const nameB = b.name.first.toUpperCase();
      
        let comparison = 0;
        if (nameA > nameB) {
          comparison = 1;
        } else if (nameA < nameB) {
          comparison = -1;
        }
        return comparison;
      }
}