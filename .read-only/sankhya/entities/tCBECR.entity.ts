import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcbecbEntity } from './tCBECB.entity';
import { TcbempEntity } from './tCBEMP.entity';

@Index('PK_TCBECR', ['codemp', 'bloco', 'registro'], { unique: true })
@Entity('TCBECR', { schema: 'SANKHYA' })
export class TcbecrEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('char', { primary: true, name: 'BLOCO', length: 1 })
  bloco: string;

  @Column('char', { primary: true, name: 'REGISTRO', length: 4 })
  registro: string;

  @Column('char', { name: 'DESCRICAO', length: 250 })
  descricao: string;

  @Column('char', { name: 'FORMAESCRIT_G', length: 1, default: () => "'N'" })
  formaescritG: string;

  @Column('char', { name: 'FORMAESCRIT_R', length: 1, default: () => "'N'" })
  formaescritR: string;

  @Column('char', { name: 'FORMAESCRIT_A', length: 1, default: () => "'N'" })
  formaescritA: string;

  @Column('char', { name: 'FORMAESCRIT_B', length: 1, default: () => "'N'" })
  formaescritB: string;

  @Column('char', { name: 'FORMAESCRIT_Z', length: 1, default: () => "'N'" })
  formaescritZ: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcbecrs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TcbecbEntity, (tcbecbEntity) => tcbecbEntity.tcbecrs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'BLOCO', referencedColumnName: 'bloco' },
  ])
  tcbecb: TcbecbEntity;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbecrs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;
}
