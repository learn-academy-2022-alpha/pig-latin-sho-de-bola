
/** Pig Latin Rules:
 Words that begin with CONSONANTS

#1 Begins with 1 consonant   (COMPLETED)
  FIND first vowel
  MOVE the letter BEFORE the vowel to the end
  ADD "ay" to the end

var = beginsWithOneCons

ex:pineapple ---> ineapplepay

#2 Begins with multiple consonants   
  FIND first vowel
  MOVE the letters before the vowel to the end
  ADD "ay" to the end

ex:throw ---> owthray

var = beginsWithMultCons

------------------------------------------------------------------------------------------>
 Words that begin with a VOWEL  

#3 Begins with a vowel   (COMPLETED) 
ADD "way" to the end

ex: apple ---> appleway

var = beginsWithVowel

------------------------------------------------------------------------------------------>
Words that have a "QU" in the first syllable 

#4 Begins with "qu"   (COMPLETED)
FIND first non-u vowel
MOVE the letters before the non-u vowel to the end
ADD "ay" to the end

ex:queen ---> eenquay

var = beginsWithQu

#5 "qu" in first syllable
FIND first non-u vowel
MOVE the letters before the non-u vowel to the end
ADD "ay" to the end

ex:squeal ---> ealsquay

var = firstSyllableQu
------------------------------------------------------------------------------------------>
Sometimes "Y"

#6 "Y" is NOT the vowel
FIND first vowel
MOVE letters before the vowel to the end
ADD "ay" to the end

ex:yummy ---> ummyyay

var = yNotVowel

#7 "Y" IS the vowel
FIND first vowel
ADD "ay" to the end

ex:fry ---> yfray

var = yIsTheVowel

If “y” is a vowel, treat it as a vowel, if y is a consonant, treat it as a consonant.

**/


userInput ----> typed into input box returned as an array of strings

apple Pineapple queen throw squeal yummy fry

appleway ineapplepay  eenquay owthray ealsquay ummyyay yfray
