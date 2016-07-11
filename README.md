mcyGeolocation - Geolocation service.
=======

A simple Geolocation service that uses ipinfo to get the geolocation.


## How to get it ? 

#### Manual Download
Download the from [here](https://github.com/nandkv/mcy-geolocation/releases)

#### Bower 
```
bower install mcy-geolocation
```
<!--
#### Npm
```
npm install mcy-geolocation
```
-->

## Usage

1. Add mcy-geolocation.js to your main file (index.html)
  ```html
  <script type="text/javascript" src="bower_components/mcy-geolocation/dist/mcy-geolocation.js"></script>
  ```

2. Set `mcyGeolocation` as a dependency in your module
  ```javascript
  var myapp = angular.module('myapp', ['mcyGeolocation'])
  ```

3. Use the service in the module, example:
  ```javascript
  var locationResult = GeolocationService.getLocation();
  ```


## Examples

## Credits
