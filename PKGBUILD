pkgname=koompi-plasma-themes
pkgver=20210203
pkgrel=4
arch=('any')
pkgdesc="Custom plasma themes for KOOMPI OS"
url="https://koompi.com"
source=("${pkgname}::git+https://github.com/koompi/plasma-themes.git")
md5sums=('SKIP')

package() {
    mkdir -p ${pkgdir}/usr/share/plasma
    cp -r ${srcdir}/${pkgname}/icons ${pkgdir}/usr/share
    cp -r ${srcdir}/${pkgname}/look-and-feel ${pkgdir}/usr/share/plasma
    cp -r ${srcdir}/${pkgname}/plasmoids ${pkgdir}/usr/share/plasma
}
