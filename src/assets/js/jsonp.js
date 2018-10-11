import originJsonp from 'jsonp'

export default function jsonp(url, option) { 
    return new Promise((resolve, reject) => {
      originJsonp(url, option, (err, data) => {
        if (!err) {
          resolve(data)
        } else {
          reject(err)
        }
      })
    })
  }