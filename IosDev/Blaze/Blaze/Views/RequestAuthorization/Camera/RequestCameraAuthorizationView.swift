//
//  RequestCameraAuthorizationView.swift
//  Blaze
//
//  Created by Abidoye Samuel on 21/10/2025.
//

import UIKit

protocol RequestCameraAuthorizationViewDelegate: AnyObject {
    func requestCameraAuthorizationTapped()
}
class RequestCameraAuthorizationView: UIView {
    @IBOutlet private weak var contentView: UIView!
    @IBOutlet private weak var cameraImageView: UIImageView!
    @IBOutlet private weak var titleLabel: UILabel!
    @IBOutlet private weak var messageLabel: UILabel!
    @IBOutlet private weak var actionButton: UIButton!
    
    weak var delegate: RequestCameraAuthorizationViewDelegate?
    
    override init(frame: CGRect){
        super.init(frame: frame)
        customInit()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        customInit()
    }
    
    private func customInit(){
        let bundle = Bundle.main
        let nibName = String(describing: Self.self)
        bundle.loadNibNamed(nibName, owner: self, options: nil)
        addSubview(contentView)
        contentView.frame = bounds
        contentView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
    }
    
    @IBAction func actionButtonHandler(btn: UIButton){
        delegate?.requestCameraAuthorizationTapped()
    }
    /*
    // Only override draw() if you perform custom drawing.
    // An empty implementation adversely affects performance during animation.
    override func draw(_ rect: CGRect) {
        // Drawing code
    }
    */

}
