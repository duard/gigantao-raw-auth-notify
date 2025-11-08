import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbecfEntity } from './tCBECF.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCBECFC', ['codemp', 'bloco', 'registro', 'codigo', 'codctactb'], {
  unique: true,
})
@Entity('TCBECFC', { schema: 'SANKHYA' })
export class TcbecfcEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'BLOCO', length: 1 })
  bloco: string;

  @Column('smallint', { primary: true, name: 'REGISTRO' })
  registro: number;

  @Column('varchar', { primary: true, name: 'CODIGO', length: 10 })
  codigo: string;

  @Column('int', { primary: true, name: 'CODCTACTB' })
  codctactb: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TcbecfEntity, (tcbecfEntity) => tcbecfEntity.tcbecfcs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'BLOCO', referencedColumnName: 'bloco' },
    { name: 'REGISTRO', referencedColumnName: 'registro' },
    { name: 'CODIGO', referencedColumnName: 'codigo' },
  ])
  tcbecf: TcbecfEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcbecfcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
