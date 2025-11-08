import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfpturEntity } from './tFPTUR.entity';

@Index('PK_TFPESC', ['nuescala'], { unique: true })
@Entity('TFPESC', { schema: 'SANKHYA' })
export class TfpescEntity {
  @Column('int', { primary: true, name: 'NUESCALA' })
  nuescala: number;

  @Column('varchar', { name: 'DESCRESCALA', length: 60 })
  descrescala: string;

  @Column('char', { name: 'TIPPERIODO', length: 1, default: () => "'M'" })
  tipperiodo: string;

  @Column('smallint', { name: 'QTDPERIODO', default: () => '(1)' })
  qtdperiodo: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DTINICIO', default: () => 'getdate()' })
  dtinicio: Date;

  @Column('char', { name: 'TPFECHAMENTO', nullable: true, length: 1 })
  tpfechamento: string | null;

  @OneToMany(() => TfpturEntity, (tfpturEntity) => tfpturEntity.nuescala2)
  tfpturs: TfpturEntity[];
}
