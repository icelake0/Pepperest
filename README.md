# Frontend Application for Pepperest

> This the Frontend Code base for the Pepperest.

## Installation

- `git clone https://github.com/Pepperest-dev/pepperest.git`
- cd into the folder or directory
- run `yarn` or `yarn install`
  
  #Step 1
- `yarn start`
- open browser `http://localhost:3000`
-

### Notice

- For every task you, **DON'T** push to Master!!!
- Create a well detailed Pull Request please. Add screenshots of tasks done. So we wont take time to review your PR.
- Thanks . Enjoy!!!

### Assets

> Media

Media ranging from fonts, images and svgs can be found in this path

- **pepperest**
  - **public**
    - **assets**

> Stylesheets

All stylesheets can be found in the path

- **pepperest**
  - **src**
    - **assets**
    - **scss**

### Others

- Reusable components are divided into

  - blocks - components that can be alone and not used everywhere
  - shared - components that are used in multiples places; example header, buttons, avatar, e.t.c
  - vectors - components for vectors like svg
  - layouts - components that houses all other components, e.g default page layouts, authentication page layout, e.t.c

  All re-useable components can be found at path.

  - **pepperest**
    - **src**
      - **components**
      - **blocks**
        - [index.js](src/components/blocks/index.js)
      - **shared**
        - [index.js](src/components/shared/index.js)
      - **vectors**
        - [index.js](src/components/vectors/index.js)

- Pages can be found at this path
  - **pepperest**
    - **src**
      - **pages**
        - [index.js](src/pages/index.js)

- Routes configurations can be found at this path
  - **pepperest**
    - **src**
      - **config**

- Dummy data can be found at this path
  - **pepperest**
    - **src**
      - **libs**
        - **constants**
          - [index.js](src/libs/constants/index.js)

- Utility functions can be found at this path
  - **pepperest**
    - **src**
      - **libs**
        - **utils**
          - [index.js](src/libs/utils/index.js)

- Helper Components and Context can be found at this path
  - **pepperest**
    - **src**
      - **components**
        - **helpers**
