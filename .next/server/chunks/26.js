"use strict";
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 3671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./config.json
var config_0 = __webpack_require__(1181);
;// CONCATENATED MODULE: ./misc/useWindowSize.tsx

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const { 0: windowSize , 1: setWindowSize  } = (0,external_react_.useState)({
        width: undefined,
        height: undefined
    });
    (0,external_react_.useEffect)(()=>{
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return ()=>window.removeEventListener("resize", handleResize)
        ;
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}
/* harmony default export */ const misc_useWindowSize = (useWindowSize);

;// CONCATENATED MODULE: ./components/navMenu.tsx





const MobileMenu = ({ menu  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "group relative",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                className: "rounded px-3 py-2",
                children: [
                    "Menu",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "ml-2 text-sm",
                        children: "\u25BC"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                tabIndex: 0,
                className: "invisible rounded bg-white w-40 absolute right-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1 shadow-lg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "py-1",
                    children: menu.map((child)=>{
                        if ("children" in child) {
                            return child.children.map((subChild)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: subChild.link,
                                        target: "_blank",
                                        rel: "noopener",
                                        className: "block px-4 py-2 hover:bg-primary-light",
                                        children: subChild.name
                                    })
                                }, subChild.name + subChild.link)
                            );
                        }
                        return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: child.link,
                                target: "_blank",
                                rel: "noopener",
                                className: "block px-4 py-2 hover:bg-primary-light",
                                children: child.name
                            })
                        }, child.name + child.link);
                    }).flat()
                })
            })
        ]
    });
};
const DropdownMenuItem = ({ name , children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "group relative",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                className: "rounded px-3 py-2",
                children: [
                    name,
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "ml-2 text-sm",
                        children: "\u25BC"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                tabIndex: 0,
                className: "invisible rounded bg-white w-40 absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1 shadow-lg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "py-1",
                    children: children.map((child)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: child.link,
                                target: "_blank",
                                rel: "noopener",
                                className: "block px-4 py-2 hover:bg-primary-light",
                                children: child.name
                            })
                        }, child.name + child.link)
                    )
                })
            })
        ]
    })
;
const SimpleMenuItem = ({ name , link , type =""  })=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: link,
        target: "_blank",
        rel: "noopener",
        className: `px-3 py-2 ${type === "button" ? "rounded bg-primary-dark hover:bg-gray-400 transition-colors" : ""}`,
        children: name
    })
;
function NavMenu() {
    const { width  } = misc_useWindowSize();
    if (width < 640) {
        return /*#__PURE__*/ jsx_runtime_.jsx(MobileMenu, {
            menu: config_0/* header.menu */.Fs.GI
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "flex gap-4",
        children: config_0/* header.menu.map */.Fs.GI.map((item)=>"children" in item ? /*#__PURE__*/ (0,external_react_.createElement)(DropdownMenuItem, {
                ...item,
                key: item.name
            }) : /*#__PURE__*/ (0,external_react_.createElement)(SimpleMenuItem, {
                ...item,
                key: item.name
            })
        )
    });
};

;// CONCATENATED MODULE: ./components/header.tsx




function Header() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "bg-primary-light",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between max-w-6xl p-8 mx-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "font-medium text-2xl flex gap-2",
                            children: [
                                config_0/* logo.image */.jY.B && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: config_0/* logo.image */.jY.B,
                                    className: "w-8 max-h-8 object-contain",
                                    alt: config_0/* logo.text */.jY.f
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: config_0/* logo.text */.jY.f
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavMenu, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-6xl p-8 mx-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-5xl font-medium mb-4",
                        children: config_0/* header.title */.Fs.TN
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-lg max-w-md",
                        children: config_0/* header.description */.Fs.WL
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: external "next/script"
var script_ = __webpack_require__(4780);
var script_default = /*#__PURE__*/__webpack_require__.n(script_);
;// CONCATENATED MODULE: ./misc/useAnalytics.ts

var AnalyticsProviders;
(function(AnalyticsProviders) {
    AnalyticsProviders["Google"] = "Google Analytics";
    AnalyticsProviders["Simple"] = "Simple Analytics";
    AnalyticsProviders["Plausible"] = "Plausible Analytics";
})(AnalyticsProviders || (AnalyticsProviders = {}));
function useAnalytics() {
    const { type  } = config.analytics;
    let logEvent = (...rest)=>undefined
    ;
    if (type === AnalyticsProviders.Google) {
        logEvent = (action, category, label, value)=>{
            if ("gtag" in window) {
                var _obj, ref;
                (ref = (_obj = window).gtag) === null || ref === void 0 ? void 0 : ref.call(_obj, "event", action, {
                    event_category: category,
                    event_label: label,
                    value: value
                });
            }
        };
    }
    if (type === AnalyticsProviders.Google) {
        logEvent = (eventName, callback)=>{
            if ("sa_event" in window) {
                if (callback) {
                    var _obj, ref;
                    return (ref = (_obj = window).sa_event) === null || ref === void 0 ? void 0 : ref.call(_obj, eventName, callback);
                } else {
                    var _obj1, ref1;
                    return (ref1 = (_obj1 = window).sa_event) === null || ref1 === void 0 ? void 0 : ref1.call(_obj1, eventName);
                }
            }
        };
    }
    if (type === AnalyticsProviders.Plausible) {
        logEvent = (eventName, ...rest)=>{
            if ("plausible" in window) {
                var _obj, ref;
                return (ref = (_obj = window).plausible) === null || ref === void 0 ? void 0 : ref.call(_obj, eventName, ...rest);
            }
        };
    }
    return {
        logEvent
    };
};

;// CONCATENATED MODULE: ./components/analytics.tsx





function Analytics() {
    const { type , id  } = config_0/* analytics */.co;
    if (type === AnalyticsProviders.Google) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                    strategy: "lazyOnload",
                    src: `https://www.googletagmanager.com/gtag/js?id=${id}`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                    strategy: "lazyOnload",
                    children: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${id}', { page_path: window.location.pathname });`
                })
            ]
        });
    }
    if (type === AnalyticsProviders.Simple) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                    strategy: "lazyOnload",
                    children: `window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                    strategy: "lazyOnload",
                    src: "https://scripts.simpleanalyticscdn.com/latest.js"
                })
            ]
        });
    }
    if (type === AnalyticsProviders.Plausible) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                    strategy: "lazyOnload",
                    "data-domain": id,
                    src: "https://plausible.io/js/plausible.js"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                    strategy: "lazyOnload",
                    children: `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`
                })
            ]
        });
    }
    return null;
};

;// CONCATENATED MODULE: ./components/footer.tsx





function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "bg-primary-light",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col md:flex-row gap-4 max-w-6xl p-8 mx-auto",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex-1 flex flex-col justify-center items-start",
                        children: [
                            config_0/* logo.image */.jY.B && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mb-2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: config_0/* logo.image */.jY.B,
                                    className: "w-12 max-h-12 object-contain",
                                    alt: config_0/* logo.text */.jY.f
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "block justify-items-start font-medium text-2xl",
                                    children: config_0/* logo.text */.jY.f
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-gray-600",
                                children: config_0/* meta.description */.$y.WL
                            })
                        ]
                    }),
                    config_0/* footer.section.map */.Mv.q.map((section)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "md:p-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "font-bold mb-2",
                                    children: section.linkTitle
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "",
                                    children: section.links.map((footerLink)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: footerLink.link,
                                                target: "_blank",
                                                rel: "noopener",
                                                className: "block py-1",
                                                children: footerLink.name
                                            })
                                        }, footerLink.name + footerLink.link)
                                    )
                                })
                            ]
                        }, section.linkTitle)
                    )
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-primary-medium",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "max-w-6xl px-8 py-2 mx-auto font-light text-sm text-center",
                    children: config_0/* footer.copyright */.Mv.i
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Analytics, {})
        ]
    });
};

;// CONCATENATED MODULE: ./components/layout.tsx






function Layout({ children , title =config_0/* meta.title */.$y.TN , description =config_0/* meta.description */.$y.WL ,  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: "Product Log"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:site",
                        content: "@apvarun"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: config_0/* meta.image */.$y.BH
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "p-8 max-w-14xl grid grid-cols-1 md:grid-cols-4 gap-2 lg:gap-4",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};


/***/ }),

/***/ 2696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PostView)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "markdown-to-jsx"
var external_markdown_to_jsx_ = __webpack_require__(1904);
var external_markdown_to_jsx_default = /*#__PURE__*/__webpack_require__.n(external_markdown_to_jsx_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-syntax-highlighter"
var external_react_syntax_highlighter_ = __webpack_require__(727);
var external_react_syntax_highlighter_default = /*#__PURE__*/__webpack_require__.n(external_react_syntax_highlighter_);
// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/styles/hljs"
var hljs_ = __webpack_require__(7079);
// EXTERNAL MODULE: external "react-katex"
var external_react_katex_ = __webpack_require__(2293);
// EXTERNAL MODULE: external "react-notion"
var external_react_notion_ = __webpack_require__(799);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/markdown/image.tsx


const MarkdownImage = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "markdown-img-container",
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
            ...props,
            layout: "fill",
            className: "markdown-img"
        })
    })
;
/* harmony default export */ const markdown_image = (MarkdownImage);

// EXTERNAL MODULE: ./config.json
var config = __webpack_require__(1181);
;// CONCATENATED MODULE: ./components/postView.tsx












function PostView({ title , content , createdAt , permalink  }) {
    const date = external_dayjs_default()(createdAt || new Date()).format("D MMMM YYYY");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: permalink,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-3xl font-bold hover:underline inline-block",
                        children: title
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mt-1 text-sm text-gray-500",
                children: date
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "prose lg:prose-lg mx-auto max-w-6xl pt-4 pb-8",
                children: [
                    config/* data.type */.aT.d === "local" && /*#__PURE__*/ jsx_runtime_.jsx((external_markdown_to_jsx_default()), {
                        options: {
                            overrides: {
                                img: {
                                    component: markdown_image
                                },
                                p: {
                                    component: ({ children , ...props })=>{
                                        var ref;
                                        const ParaComponent = ((ref = children[0]) === null || ref === void 0 ? void 0 : ref.type) === markdown_image ? "div" : "p";
                                        return /*#__PURE__*/ jsx_runtime_.jsx(ParaComponent, {
                                            ...props,
                                            children: children
                                        });
                                    }
                                },
                                pre: {
                                    component: ({ children , ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            ...props,
                                            children: children
                                        })
                                },
                                code: {
                                    component: ({ className , children  })=>{
                                        const language = (className || "").replace("lang-", "");
                                        if (language === "math") {
                                            return /*#__PURE__*/ jsx_runtime_.jsx(external_react_katex_.BlockMath, {
                                                math: children
                                            });
                                        }
                                        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_syntax_highlighter_default()), {
                                            language: language,
                                            style: hljs_.obsidian,
                                            children: children
                                        });
                                    }
                                }
                            }
                        },
                        children: content
                    }),
                    config/* data.type */.aT.d === "notion" && /*#__PURE__*/ jsx_runtime_.jsx(external_react_notion_.NotionRenderer, {
                        blockMap: content,
                        customBlockComponents: {
                            code: ({ blockValue  })=>{
                                var ref, ref1;
                                const language = (((ref = blockValue.properties["language"]) === null || ref === void 0 ? void 0 : ref[0]) || [
                                    "", 
                                ])[0];
                                const children = ((ref1 = blockValue.properties["title"]) === null || ref1 === void 0 ? void 0 : ref1[0]) || "";
                                if (language === "LaTeX") {
                                    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_katex_.BlockMath, {
                                        math: children.toString()
                                    });
                                }
                                return /*#__PURE__*/ jsx_runtime_.jsx((external_react_syntax_highlighter_default()), {
                                    language: language,
                                    style: hljs_.obsidian,
                                    children: children
                                });
                            }
                        }
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 3859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _misc_getFolders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8136);




function Sidebar({ posts , showBackHome =false  }) {
    const paths = (0,_misc_getFolders__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(posts);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col",
        children: [
            showBackHome && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: `/`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "mb-4",
                    children: "\u2190 Back home"
                })
            }),
            paths.map((path)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: `/${path}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "text-xl mb-4",
                        children: path
                    })
                }, path)
            )
        ]
    });
};


/***/ }),

/***/ 2575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ getSource)
});

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
;// CONCATENATED MODULE: ./lib/utils/getConfig.ts


function getConfig() {
    try {
        return JSON.parse(external_fs_default().readFileSync(external_path_default().join(process.cwd(), "config.json"), "utf-8"));
    } catch  {
        return null;
    }
};

;// CONCATENATED MODULE: ./lib/sources/local.ts




const getAllFiles = async (dir, basePath)=>{
    const markdownFiles = await external_fs_.promises.readdir(dir, {
        withFileTypes: true
    });
    const postList = [];
    for(let i = 0; i < markdownFiles.length; i++){
        if (markdownFiles[i].isDirectory()) {
            postList.push(...await getAllFiles(external_path_default().join(dir, markdownFiles[i].name), basePath));
            continue;
        }
        const postPath = dir.replace(basePath, "");
        const slug = markdownFiles[i].name.replace(/.md$/, "");
        const contentStr = await external_fs_.promises.readFile(`${dir}/${markdownFiles[i].name}`, "utf8");
        const { content , data: frontmatter  } = external_gray_matter_default()(contentStr);
        const createdAt = new Date(frontmatter === null || frontmatter === void 0 ? void 0 : frontmatter.createdAt).getTime();
        const title = slug.replace("-", " ");
        postList.push({
            type: "local",
            path: postPath,
            slug: (frontmatter === null || frontmatter === void 0 ? void 0 : frontmatter.slug) || slug,
            permalink: (frontmatter === null || frontmatter === void 0 ? void 0 : frontmatter.slug) || postPath + "/" + slug,
            createdAt,
            title: (frontmatter === null || frontmatter === void 0 ? void 0 : frontmatter.title) || title,
            content
        });
    }
    return postList.sort((post1, post2)=>post2.createdAt - post1.createdAt
    );
};
function getLocalSource() {
    let posts = [];
    let postsFetched = false;
    const fetchPostsIfRequired = async ()=>{
        if (postsFetched) {
            return;
        }
        const config = getConfig();
        if (config) {
            const basePath = external_path_default().join(process.cwd(), config.data.name);
            posts = await getAllFiles(basePath, basePath);
        }
        postsFetched = true;
    };
    const getAllPosts = async ()=>{
        await fetchPostsIfRequired();
        return posts;
    };
    const getPost = async (slug)=>{
        await fetchPostsIfRequired();
        return posts.find((post)=>`${post.path}/${post.slug}` === slug
        );
    };
    const getPostsCount = async ()=>{
        await fetchPostsIfRequired();
        return posts.length;
    };
    return {
        getAllPosts,
        getPost,
        getPostsCount
    };
}

;// CONCATENATED MODULE: ./lib/sources/notion.ts

const getNotionPosts = async (id)=>{
    const notionPosts = await fetch(`https://notion-api.splitbee.io/v1/table/${id}`).then((res)=>res.json()
    );
    const processedPosts = [];
    for(let i = 0; i < notionPosts.length; i++){
        const { year , slug , createdAt , title , id  } = notionPosts[i];
        const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/${id}`).then((res)=>res.json()
        );
        processedPosts.push({
            type: "notion",
            path: `/${year}`,
            permalink: `/${year}/${slug}`,
            slug,
            createdAt: new Date(createdAt).getTime(),
            title,
            content: blocks
        });
    }
    return processedPosts;
};
function getNotionSource() {
    let posts = [];
    let postsFetched = false;
    const fetchPostsIfRequired = async ()=>{
        if (postsFetched) {
            return;
        }
        const config = getConfig();
        if (config) {
            posts = await getNotionPosts(config.data.name);
        }
        postsFetched = true;
    };
    const getAllPosts = async ()=>{
        await fetchPostsIfRequired();
        return posts;
    };
    const getPost = async (slug)=>{
        await fetchPostsIfRequired();
        return posts.find((post)=>`${post.path}/${post.slug}` === slug
        );
    };
    const getPostsCount = async ()=>{
        await fetchPostsIfRequired();
        return posts.length;
    };
    return {
        getAllPosts,
        getPost,
        getPostsCount
    };
}

;// CONCATENATED MODULE: ./lib/index.ts



function getSource() {
    const config = getConfig();
    switch(config.data.type){
        case "local":
            return getLocalSource();
        case "notion":
            return getNotionSource();
        default:
            return null;
    }
};


/***/ }),

/***/ 8136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getFolders)
/* harmony export */ });
function getFolders(posts) {
    return Array.from(new Set(posts.map((post)=>post.path.split("/").filter((p)=>!!p
        )[0]
    )));
};


/***/ }),

/***/ 1181:
/***/ ((module) => {

module.exports = JSON.parse('{"aT":{"d":"notion"},"$y":{"TN":"Product Log - Home of your Product\'s changelogs","WL":"Recent changes to your product and it\'s benefits","BH":"/static/ProductLog.png"},"jY":{"B":"/static/logo.svg","f":"Product Log"},"Fs":{"TN":"Changelog","WL":"New updates and improvements to this project will be documented in this page.","GI":[{"name":"Services","children":[{"name":"Copywriting","link":"https://example.com"},{"name":"UX Design","link":"https://example.com"}]},{"name":"Contact","link":"https://example.com"},{"name":"Sign Up","link":"https://example.com","type":"button"}]},"Mv":{"q":[{"linkTitle":"Social","links":[{"name":"Twitter","link":"https://example.com"},{"name":"GitHub","link":"https://example.com"},{"name":"Discuss","link":"https://example.com"}]},{"linkTitle":"Company","links":[{"name":"About","link":"https://example.com"},{"name":"F.A.Q","link":"https://example.com"},{"name":"Contact","link":"https://example.com"}]}],"i":"© 2021 Product Log · All rights reserved"},"co":{"type":"Google Analytics","id":""}}');

/***/ })

};
;