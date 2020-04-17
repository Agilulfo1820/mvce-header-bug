### Instructions

``` bash
# clone the repository
$ git clone 

#install expo-cli
npm install -g expo-cli

# install the app dependencies
expo install

# start the expo server
expo start -c

#scan the qr code on the expo app
```

### Bug description
The upper header is blu on the screens where I am using the `<Header />` component.
Strange thing is that if I go from First Screen or Third Screen (without any Header component), where the header is transparent, to the Second or Fourth Screen (with Header component), where the header becomes blue, then when I go back to First or Third Screen there's a header and it's black.