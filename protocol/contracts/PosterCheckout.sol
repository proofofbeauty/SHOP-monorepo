// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ERC20Mintable.sol";
import "./Ownable.sol";
import "./utils/Strings.sol";

contract PosterCheckout is Ownable {

    ERC20Mintable public immutable payableErc20;
    address public treasury;
    uint256 public orderID = 0;

    struct Product { 
      string id;
      uint256 price;
      bool inStock;
    }
    mapping (uint256 => Product) public products;

    event PosterOrderReceived(
      uint indexed _orderID,
      address _collection, 
      uint256 _tokenid,
      bytes _orderDetails
    );

    constructor (
      address _payableErc20
    ) {
      payableErc20 = ERC20Mintable(_payableErc20);
    }

    function setTreasury(address _treasury) public onlyOwner {
      treasury = _treasury;
    }

    function setProduct(uint256 _index, Product memory _product) public onlyOwner {
      products[_index] = _product;
    }

    function setProductInStock(uint256 _index, bool _inStock) public onlyOwner {
      products[_index].inStock = _inStock;
    }

    function setProductPrice(uint256 _index, uint256 _price) public onlyOwner {
      products[_index].price = _price;
    }

    function buy(uint256 _index, address _collection, uint256 _tokenid, bytes calldata _orderDetails) public {
      Product memory product = products[_index];
      uint256 price = product.price;
      // ensure approval and conditions are met
      require(product.inStock, "Product out of stock");
      require(payableErc20.allowance(_msgSender(), address(this)) >= price, "Not enough allowance for payment");
      require(payableErc20.balanceOf(_msgSender()) >= price, "Not enough token for payment");
      // transfer payableERC20
      payableErc20.transferFrom(_msgSender(), treasury, price);
      // increment order count
      orderID += 1;
      // emit order details
      emit PosterOrderReceived(orderID, _collection, _tokenid, _orderDetails);
    }
}