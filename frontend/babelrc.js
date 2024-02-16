module.exports = {
    presets: [require.resolve('next/babel')],
    plugins: [
      [
        require.resolve('babel-plugin-import'),
        { libraryName: 'antd' }
      ]
    ]
  };
/*
{plugins: [
        [
            "import",
            {
                "libraryName": "antd"
                // "style": true, // or 'css'
            }
        ]
    ]
};
// {
//     "presets": [
//         "@babel/env",
//         "@babel/preset-react"
//     ],
//     "plugins": [
//         "syntax-dynamic-import",
//         [
//             "import",
//             {
//                 "libraryName": "antd"
//                 // "style": true, // or 'css'
//             }
//         ]
//     ]
// }
*/