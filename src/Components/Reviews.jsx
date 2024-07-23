import React from 'react'
import "./Reviews.css"
import Savannah from './Images/Savannah-Nguyen.png'
import Floyd from './Images/Floyd-Miles.png'
import Ronald from './Images/Ronald-Richards.png'
import Miles from './Images/Miles.png'
import Richards from './Images/Richards.png'

export default function Reviews() {
  return (
    <div className='main-container'>
        <div class="container1">
            <h1 class="title">REVIEWS</h1>
            <h2 class="subtitle">Our Customer Feedback</h2>
            <p class="description">Don't take our word for it. Trust our customers</p>
            <div class="reviews">
                <div class="review-card">
                    <img src={Savannah} alt="Savannah Nguyen" class="review-image"/>
                    <div class="review-content">
                        <h3 class="review-name">Savannah Nguyen</h3>
                        <p class="review-text">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia 
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <div class="review-rating">★★★★☆</div>
                    </div>
                </div>
                <div class="review-card">
                    <img src={Floyd} alt="Floyd Miles" class="review-image"/>
                    <div class="review-content">
                        <h3 class="review-name">Floyd Miles</h3>
                        <p class="review-text">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia 
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <div class="review-rating">★★★★★</div>
                    </div>
                </div>
                <div class="review-card">
                    <img src={Ronald} alt="Ronald Richards" class="review-image"/>
                    <div class="review-content">
                        <h3 class="review-name">Ronald Richards</h3>
                        <p class="review-text">
                            Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <div class="review-rating">★★★★☆</div>
                    </div>
                </div>
                <div class="review-card">
                    <img src={Miles} alt="Ronald Richards" class="review-image"/>
                    <div class="review-content">
                        <h3 class="review-name">Ronald Richards</h3>
                        <p class="review-text">
                            Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <div class="review-rating">★★★★☆</div>
                    </div>
                </div>
                <div class="review-card">
                    <img src={Floyd} alt="Ronald Richards" class="review-image"/>
                    <div class="review-content">
                        <h3 class="review-name">Ronald Richards</h3>
                        <p class="review-text">
                            Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <div class="review-rating">★★★★☆</div>
                    </div>
                </div>
                <div class="review-card">
                    <img src={Richards} alt="Ronald Richards" class="review-image"/>
                    <div class="review-content">
                        <h3 class="review-name">Ronald Richards</h3>
                        <p class="review-text">
                            Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <div class="review-rating">★★★★☆</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
