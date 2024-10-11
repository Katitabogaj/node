import { products } from "../routes/admin.js"

export const getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add-product',
      path:'/admin/add-product'
    })
}

export const postAddProduct = (req, res, next) => {
  res.render('shop', {
      pageTitle: 'My products'
  })
}

export const getAllProducts = (req, res, next) => {
  res.render('shop.ejs'),{
    pageTitle:'shop',
    prods: products,
    path: '/'
  }
}