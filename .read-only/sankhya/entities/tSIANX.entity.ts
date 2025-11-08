import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('CHAVEARQUIVO_UNIQUE', ['chavearquivo'], { unique: true })
@Index('PK_NUATTACH', ['nuattach'], { unique: true })
@Index('TSIANX_01', ['pkregistro'], {})
@Entity('TSIANX', { schema: 'SANKHYA' })
export class TsianxEntity {
  @Column('int', { primary: true, name: 'NUATTACH' })
  nuattach: number;

  @Column('varchar', { name: 'NOMEINSTANCIA', length: 30 })
  nomeinstancia: string;

  @Column('varchar', {
    name: 'CHAVEARQUIVO',
    nullable: true,
    unique: true,
    length: 300,
  })
  chavearquivo: string | null;

  @Column('varchar', { name: 'NOMEARQUIVO', length: 1000 })
  nomearquivo: string;

  @Column('varchar', { name: 'DESCRICAO', length: 300 })
  descricao: string;

  @Column('varchar', { name: 'RESOURCEID', nullable: true, length: 1000 })
  resourceid: string | null;

  @Column('varchar', { name: 'TIPOAPRES', length: 3 })
  tipoapres: string;

  @Column('varchar', { name: 'TIPOACESSO', length: 3 })
  tipoacesso: string;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('varchar', { name: 'PKREGISTRO', length: 512 })
  pkregistro: string;

  @Column('smallint', { name: 'CODUSUALT', default: () => '(0)' })
  codusualt: number;

  @Column('datetime', { name: 'DHCAD', default: () => 'getdate()' })
  dhcad: Date;

  @Column('text', { name: 'LINK', nullable: true })
  link: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsianxes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
