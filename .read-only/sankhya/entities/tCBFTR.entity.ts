import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCBFTR', ['codemp', 'exercicio', 'trimestre'], { unique: true })
@Entity('TCBFTR', { schema: 'SANKHYA' })
export class TcbftrEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'EXERCICIO' })
  exercicio: number;

  @Column('smallint', {
    primary: true,
    name: 'TRIMESTRE',
    default: () => '(1)',
  })
  trimestre: number;

  @Column('varchar', { name: 'FORMATRIBPER', length: 1, default: () => "'R'" })
  formatribper: string;

  @Column('varchar', { name: 'MES1BALRED', length: 1, default: () => "'0'" })
  mes1Balred: string;

  @Column('varchar', { name: 'MES2BALRED', length: 1, default: () => "'0'" })
  mes2Balred: string;

  @Column('varchar', { name: 'MES3BALRED', length: 1, default: () => "'0'" })
  mes3Balred: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcbftrs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcbftrs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
