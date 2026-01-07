import { log } from 'console'
import {stdout, stdin} from 'process'
import rl from 'readline'

const input = rl.createInterface({
    input: stdin,
    output: stdout
})

const book = new Map()

const disp = () => {
    console.log('-----Simple Book Mangement System-----');
    console.log('1.View');
    console.log('2.Insert');
    console.log('3.Delete');
    console.log('4.Update');
    console.log('5.Search');
    console.log('6.Exit');
}

input.question('Enter a Option:',(opt)=>{
    bookMgt(opt)
})

let bookMgt = (opt) => {
  
}