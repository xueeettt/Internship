import axios from "axios";

const base = {
  baseUrl: "http://13.239.31.245:5566",
  teamBio: "/api/bio/team-member",
  researchContent: "/api/research/content",
  sendEmail: "/api/contact/send-email",
  news: "/api/news",
  papers: "/api/publication/papers"
};

const api = {
  getTeamBio() {
    return axios.get(base.baseUrl + base.teamBio, { withCredentials: true })
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching team bio:', error.response ? error.response.data : error.message);
        throw error;
      });
  },

  getResearchInfo() {
    return axios.get(base.baseUrl + base.researchContent, { withCredentials: true })
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching research info:', error.response ? error.response.data : error.message);
        throw error;
      });
  },

  sendContactForm(data) {
    return axios.post(base.baseUrl + base.sendEmail, data, { withCredentials: true })
      .then(response => response.data)
      .catch(error => {
        console.error('Failed to send contact form data:', error.response ? error.response.data : error.message);
        throw error;
      });
  },

  getNews() {
    return axios.get(base.baseUrl + base.news, { withCredentials: true })
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching news:', error.response ? error.response.data : error.message);
        throw error;
      });
  },

  getPapers() {
    return axios.get(base.baseUrl + base.papers, { withCredentials: true })
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching papers:', error.response ? error.response.data : error.message);
        throw error;
      });
  }
};

export default api;