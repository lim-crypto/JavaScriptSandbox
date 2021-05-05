let re;
re = /hello/;
re = /hello/i; // case insensitive

// Meta character Symbols
re = /^h/i; // must START with 
re = /world$/i; // must ENDs with 
re = /^hello$/i; // must begin and end with
re = /^h.llo$/i; // . matches any ONE chracter
re = /^h*llo$/i; // matches any character 0 or MORE times
re = /gre?a?y/i; // optional character
re = /gre?a?y\?/i; // Escape character

// Brackets [] - character Sets
re = /gr[ae]y/i; // must be an a or e
re = /[GF]ray/i; // must be an G or F
re = /[^GF]ray/i; // match anything except a G or F
re = /[A-Z]ray/; // match any uppercase letter
re = /[a-z]ray/; // match any lowercase letter
re = /[A-Za-z]ray/; // match any letter
re = /[0-9]ray/; // match any digit
re = /[0-9][0-9]ray/; // match any digit

//curly braces {} quantifiers
re = /Hel{2}o/i; // must occur exactly {m} amount of times
re = /Hel{2,4}o/i;
re = /Hel{2,,}o/i; // must occur at least {m} times

// parenthesis ()  Grouping
re = /^([0-9]x){3}$/

// shorthand Character Classes
re = /\w/; // world character - aplhanumeric or _
re = /\w+/; //  + = one or more
re = /\W/; // NON - world character  
re = /\d/; // matches any digit
re = /\d+/; // matches any digit 0 or more times
re = /\D/; // NON - digits
re = /\s/; // matches whitespace char
re = /\S/; // matches non whitespace char
re = /Hell\b/i; //word boundary

// assertions
re = /x(?=y)/; // match x only if followed by y
re = /x(?!y)/; // match x only NOT if followed by y


// string to match
// const str = 'Hello world';
// const str = "Gray?"
// const str = 'Hello';
// const str = '3x3x3x';
// const str = 'Hello, hell';
const str = 'xy';



// log result
const result = re.exec(str);
console.log(result);


function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matches ${re.source} `);
    } else {
        console.log(`${str} does NOT macth ${re.source} `);
    }
}

reTest(re, str);