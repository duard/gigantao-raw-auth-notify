import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TpritecopEntity } from './tPRITECOP.entity';

@Index('PK_TPRCOP', ['idcop'], { unique: true })
@Entity('TPRCOP', { schema: 'SANKHYA' })
export class TprcopEntity {
  @Column('int', { primary: true, name: 'IDCOP' })
  idcop: number;

  @Column('varchar', { name: 'DESCRCOP', nullable: true, length: 100 })
  descrcop: string | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('int', { name: 'CODPRODMP' })
  codprodmp: number;

  @Column('varchar', {
    name: 'CONTROLEMP',
    nullable: true,
    length: 10,
    default: () => "' '",
  })
  controlemp: string | null;

  @Column('float', {
    name: 'QTDPROCESS',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  qtdprocess: number | null;

  @Column('varchar', { name: 'CODVOL', length: 2 })
  codvol: string;

  @OneToMany(() => TpritecopEntity, (tpritecopEntity) => tpritecopEntity.idcop2)
  tpritecops: TpritecopEntity[];
}
