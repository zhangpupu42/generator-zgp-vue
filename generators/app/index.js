const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: `Your project name (${this.appname})`,
                default: this.appname
            }
        ])
            .then(answers => {
                this.answers = answers
            })
    }
    // 这时候 writing 方法不再像之前只是去写入单个文件，它需要把我们刚才所准备好的那样一个 vue 的结构去批量生成，所以需要一个 templates 目录，把项目结构拷贝到 templates 当中作为模板
    writing() {
        // 正常是 一个一个生成每一个文件，把它生成到对应的目标路径，这里通过数组循环的方式，去批量的生成每一个文件
        const templates = [
            '.browserslistrc',
            '.editorconfig',
            '.env.development',
            '.env.production',
            '.eslintrc.js',
            '.gitignore',
            'babel.config.js',
            'package.json',
            'postcss.config.js',
            'README.md',
            'public/favicon.ico',
            'public/index.html',
            'src/App.vue',
            'src/main.js',
            'src/router.js',
            'src/assets/logo.png',
            'src/components/HelloWorld.vue',
            'src/store/actions.js',
            'src/store/getters.js',
            'src/store/index.js',
            'src/store/mutations.js',
            'src/store/state.js',
            'src/utils/request.js',
            'src/views/About.vue',
            'src/views/Home.vue'
        ]
        templates.forEach(item => {
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }
}