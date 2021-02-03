pkgname=koompi-plasma-themes
pkgver=20210203
pkgrel=1
pkgdesc="Custom plasma themes for KOOMPI OS"
url="https://koompi.com"
source=("git+https://github.com/koompi/plasma-themes.git")
md5sum=('SKIP')

package() {
    mkdir -p ${pkgdir}/usr/share/plasma
    cp -r ${srcdir}/icons ${pkgdir}/usr/share
    cp -r ${srcdir}/look-and-feel ${pkgdir}/usr/share/plasma
    cp -r ${srcdir}/plasmoids ${pkgdir}/usr/share/plasma
}
