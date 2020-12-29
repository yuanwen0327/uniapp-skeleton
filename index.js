#! /usr/bin/env node

const path = require('path');
const fs = require('fs')
const shell = require('shelljs');
const { program } = require('commander');
const package = require('./package.json');
const genVue = require('./genVue')


program
    .version(package.version, '-v, --version')
    .option('-p, --path [name]', '输入小程序目录 如: /pages/index/index')

program.on('--help', () => {
    console.log('');
    console.log('Example call:');
    console.log('  $ custom-help --help');
});

program.parse(process.argv);



if (program.path) {
    // console.log(shell.pwd().stdout, program.path)
    const pageBasePath = path.join(shell.pwd().stdout, 'dist/dev/mp-weixin', path.resolve(program.path))
    const pageSkeletonWXMLPath = pageBasePath + '.skeleton.wxml'
    const pageSkeletonWXSSPath = pageBasePath + '.skeleton.wxss'
    // console.log(pageBasePath,pageSkeletonWXMLPath,pageSkeletonWXSSPath)
    if (!fs.existsSync(pageSkeletonWXMLPath) || !fs.existsSync(pageSkeletonWXSSPath)) {
        console.log('页面骨架图不存在，请检查路径是否错误或是否用微信开发者工具生成过骨架图')
        return
    }

    // 合并文件
    let wxmlString = fs.readFileSync(pageSkeletonWXMLPath, {
        encoding: 'utf8'
    })

    // 删除可能会导致编译报错的属性
    wxmlString = wxmlString.replace(/is=\"(.*?)\"/ig ,'')
    wxmlString = wxmlString.replace(/data-event-opts=\"(.*?)\"/ig ,'')
    wxmlString = wxmlString.replace(/name=\"(.*?)\"/ig ,'')

    // console.log(wxmlString)
    const wxssString = fs.readFileSync(pageSkeletonWXSSPath, {
        encoding: 'utf8'
    })
    const vueString = genVue(wxmlString, wxssString)
    // console.log(vueString)

    const pathArr = program.path.split('/')
    const pageName = pathArr.pop()
    const outputPath = path.join(shell.pwd().stdout, 'src', pathArr.join('/'))
    // console.log(outputPath)

    fs.writeFileSync(path.join(outputPath, `${pageName}.skeleton.vue`), vueString, {
        encoding:'utf8'
    })
    console.log('生成成功！')

} else {
    console.log('请使用-p指定小程序页面路径')

}