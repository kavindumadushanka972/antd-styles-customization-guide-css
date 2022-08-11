import React, { useState } from 'react'
import { CopyBlock, dracula, googlecode } from 'react-code-blocks'
import { useSelector } from "react-redux";
import folders from '../../images/theme_switch.png'

import { useThemeSwitcher } from "react-css-theme-switcher";
import { Switch, Input } from "antd";

function ThemeSwitcherPage() {

    const showLineNumbers = true
    const codeBlock = true
    const { dark } = useSelector((state) => state.dark);

    const [isDarkMode, setIsDarkMode] = useState();
    const { switcher, currentTheme, status, themes } = useThemeSwitcher();

    const toggleTheme = (isChecked) => {
        setIsDarkMode(isChecked);
        switcher({ theme: isChecked ? themes.dark : themes.light });
    };

    return (
        <div className='container mb-5'>
            <h2>Switch Between Themes 🕹</h2>
            <span className='fw-bold small'>This has nothing to do with Ant Design, but I thought I'd walk you through it 
            nonetheless since I first had some trouble figuring out how to accomplish it. I have read about various methods to
            do this, but I found this method more straightforward when compared with others! 😀</span>
            <hr />

            <h4 className='mt-5'>Getting AntD Stylesheets</h4>
            <p>The first thing we have to do is creating the Less stylesheets that will contain AntD styles. To achieve this, 
            we just have to import the variables and styles that we need for each theme. For example...</p>

            <p>for the light theme:</p>

            <div className='code-block mt-3'>
                <CopyBlock
                text={`// light-theme.less

@import '~antd/lib/style/color/colorPalette.less';
@import '~antd/dist/antd.less';
@import '~antd/lib/style/themes/default.less';

// These are shared variables that can be extracted to their own file
@primary-color: #fcba03;
@border-radius-base: 4px;`}
                language={'less'}
                theme={dark ? dracula : googlecode }
                {...{ showLineNumbers, codeBlock }}
                />
            </div>

            <p className='mt-4'>For the dark theme:</p>

            <div className='code-block mt-3'>
                <CopyBlock
                text={`// dark-theme.less

@import '~antd/lib/style/color/colorPalette.less';
@import '~antd/dist/antd.less';
@import '~antd/lib/style/themes/dark.less';

@primary-color: #00adb5;
@border-radius-base: 4px;

@component-background: #303030;
@body-background: #303030;
@popover-background: #303030;
@border-color-base: #6f6c6c;
@border-color-split: #424242;
@table-header-sort-active-bg: #424242;
@card-skeleton-bg: #424242;
@skeleton-color: #424242;
@table-header-sort-active-bg: #424242;`}
                language={'less'}
                theme={dark ? dracula : googlecode }
                {...{ showLineNumbers, codeBlock }}
                />
            </div>

            <h4 className='mt-4'>Ant Design Less variables</h4>

            <p>Antd is using Less as the development language for styling. A set of less variables are defined for each design 
            aspect that can be customized to your needs.</p>

            <p>There are some major variables below, all less variables could be found in <a href="https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less" target="_blank" rel="noreferrer">
            Default Variables</a>.</p>

            <div className='code-block mt-3'>
                <CopyBlock
                text={`@primary-color: #1890ff; // primary color for all components
@link-color: #1890ff; // link color
@success-color: #52c41a; // success state color
@warning-color: #faad14; // warning state color
@error-color: #f5222d; // error state color
@font-size-base: 14px; // major text font size
@heading-color: rgba(0, 0, 0, 0.85); // heading text color
@text-color: rgba(0, 0, 0, 0.65); // major text color
@text-color-secondary: rgba(0, 0, 0, 0.45); // secondary text color
@disabled-color: rgba(0, 0, 0, 0.25); // disable state color
@border-radius-base: 2px; // major border radius
@border-color-base: #d9d9d9; // major border color
@box-shadow-base: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 9px 28px 8px rgba(0, 0, 0, 0.05); // major shadow for layers`}
                language={'less'}
                theme={dark ? dracula : googlecode }
                {...{ showLineNumbers, codeBlock }}
                />
            </div>


            <h4 className='mt-4'>Compiling Less Files With Gulp</h4>

            <p>On this step, we have to achieve two main objectives: compile Less files to CSS and then append these to the
            public or static folder so they can be available for the client to be pre-fetched and injected.</p>

            <p>There are several ways to compile Less stylesheets: using a task runner, a module bundler, or scripts. 
            Using Webpack would mean creating a plugin and with every change, the styles would have to compile which will slow 
            down development speed for styles that will remain relatively static. Using scripts can result in extensive and 
            unreadable code. Therefore, I decided to go with the Gulp task runner since it applies a pipeline paradigm with 
            files that maintain code simple and maintainable. Also, it has great support for minifying and compiling Less.</p>

            <p>Install Gulp and necessary dependencies to minify, use postcss and resolve imports:</p>

            <span className='fw-bold'>Using npm or yarn</span>

            <div className='code-block mt-3'>
                <CopyBlock
                text={`npm install -D gulp gulp-less gulp-postcss gulp-debug gulp-csso autoprefixer less-plugin-npm-import`}
                language={'bash'}
                theme={dark ? dracula : googlecode }
                {...{ showLineNumbers, codeBlock }}
                />
            </div>

            <div className='code-block mt-3'>
                <CopyBlock
                text={`yarn add -D gulp gulp-less gulp-postcss gulp-debug gulp-csso autoprefixer less-plugin-npm-import`}
                language={'bash'}
                theme={dark ? dracula : googlecode }
                {...{ showLineNumbers, codeBlock }}
                />
            </div>

            <p className='mt-4'>And create a <code>gulpfile.js</code> :</p>

            <div className='code-block mt-3'>
                <CopyBlock
                text={`const gulp = require('gulp')
const gulpless = require('gulp-less')
const postcss = require('gulp-postcss')
const debug = require('gulp-debug')
var csso = require('gulp-csso')
const autoprefixer = require('autoprefixer')
const NpmImportPlugin = require('less-plugin-npm-import')

gulp.task('less', function () {
    const plugins = [autoprefixer()]

    return gulp
    .src('src/themes/*-theme.less') // add directions to light-theme & dark-theme.less files in folder structure
    .pipe(debug({title: 'Less files:'}))
    .pipe(
        gulpless({
        javascriptEnabled: true,
        plugins: [new NpmImportPlugin({prefix: '~'})],
        }),
    )
    .pipe(postcss(plugins))
    .pipe(
        csso({
        debug: true,
        }),
    )
    .pipe(gulp.dest('./public')) // destination to store generated css file. you can add any destination folder as you wish
})`}
                language={'javascript'}
                theme={dark ? dracula : googlecode }
                {...{ showLineNumbers, codeBlock }}
                />
            </div>

            <p className='mt-4'>Finally, run <code>npx gulp less</code>, and automatically all styles will be compiled and 
            appended to the public folder. Just import that CSS file as your styles file 😀</p>
            
            <p>This is the files structure I used to explain above steps.</p>

            <img src={folders} style={{width: '300px'}} />

            <h4 className='mt-4'>Changing Between Themes</h4>

            <p>Now that we have our themes inside the public folder, we can proceed to use them in our app.</p>
            <p>First, let's add react-css-theme-switch:</p>

            <div className='code-block mt-3'>
                <CopyBlock
                text={`yarn add react-css-theme-switcher`}
                language={'bash'}
                theme={dark ? dracula : googlecode }
                {...{ showLineNumbers, codeBlock }}
                />
            </div>

            <p className='mt-4'>Then, in our <code>index.js</code> or where we are keeping our providers, we wrap the element 
            with the <code>ThemeSwitcherProvider</code>. This will store our themes and current theme. Also, 
            allow the use of <code>useThemeSwitcher</code> which change themes and fetch other metadata:</p>

            <div className='code-block mt-3'>
                <CopyBlock
                text={`// index.js
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

const themes = {
    dark: 'path to dark-theme.css file', 
    light: 'path to light-theme.css file',
};

ReactDOM.render(
    <React.StrictMode>
        <ThemeSwitcherProvider themeMap={themes} defaultTheme="light">
            <App />
        </ThemeSwitcherProvider>
    </React.StrictMode>,
    document.getElementById("root")
);`}
                language={'jsx'}
                theme={dark ? dracula : googlecode }
                {...{ showLineNumbers, codeBlock }}
                />
            </div>

            <p className='mt-4'>Now, we can use it like this:</p>

            <div>
                <h4>The current theme is: {currentTheme}</h4>
                <Switch checked={isDarkMode} onChange={toggleTheme} /> 
            </div>

            <div className='code-block mt-3'>
                <CopyBlock
                text={`import React from "react";
import "./App.css";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Switch, Input } from "antd";

export default function App() {
    const [isDarkMode, setIsDarkMode] = React.useState();
    const { switcher, currentTheme, status, themes } = useThemeSwitcher();

    const toggleTheme = (isChecked) => {
        setIsDarkMode(isChecked);
        switcher({ theme: isChecked ? themes.dark : themes.light });
    };

    return (
        <div>
            <h1>The current theme is: {currentTheme}</h1>
            <Switch checked={isDarkMode} onChange={toggleTheme} />
        </div>
    );
}`}
                language={'jsx'}
                theme={dark ? dracula : googlecode }
                {...{ showLineNumbers, codeBlock }}
                />
            </div>
        </div>
    )
}
export default ThemeSwitcherPage