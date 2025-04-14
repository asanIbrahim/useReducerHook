import React from 'react'

export const VideoBar = () => {

  let welcomeMsg = "Hi Asan Ibrahim Welcome to Onward tech";

  function lastWordLength(str){
   str.trim()
   let word = str.split(" ")
   let lastWordLength = word[word.length -1]
   return lastWordLength.length
  }


console.log(lastWordLength(welcomeMsg,"length"))
  return (
    <div>VideoBar</div>
  )
}
