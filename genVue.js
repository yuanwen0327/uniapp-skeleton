module.exports = function (wxml, wxss) {
    return `
    ${wxml}
    <script>
    export default {
        
    }
    </script>
    <style>
    ${wxss}
    </style>
    `
}