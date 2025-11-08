import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbefbEntity } from './tCBEFB.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TCBEFR', ['codemp', 'bloco', 'registro'], { unique: true })
@Entity('TCBEFR', { schema: 'SANKHYA' })
export class TcbefrEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'BLOCO', length: 1 })
  bloco: string;

  @Column('varchar', { primary: true, name: 'REGISTRO', length: 4 })
  registro: string;

  @Column('varchar', { name: 'DESCRICAO', length: 250 })
  descricao: string;

  @Column('varchar', { name: 'GERARREGISTRO', length: 1, default: () => "'N'" })
  gerarregistro: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TcbefbEntity, (tcbefbEntity) => tcbefbEntity.tcbefrs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'BLOCO', referencedColumnName: 'bloco' },
  ])
  tcbefb: TcbefbEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcbefrs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcbefrs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;
}
