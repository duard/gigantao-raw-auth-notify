import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimimvEntity } from './tIMIMV.entity';
import { TimclfEntity } from './tIMCLF.entity';
import { TimcorEntity } from './tIMCOR.entity';
import { TimanuEntity } from './tIMANU.entity';

@Index('PK_TIMCFI', ['cficlassificado', 'cfiimovel'], { unique: true })
@Entity('TIMCFI', { schema: 'SANKHYA' })
export class TimcfiEntity {
  @Column('int', { primary: true, name: 'CFICLASSIFICADO' })
  cficlassificado: number;

  @Column('int', { primary: true, name: 'CFIIMOVEL' })
  cfiimovel: number;

  @Column('char', { name: 'CFIESTAGIO', length: 1, default: () => "'N'" })
  cfiestagio: string;

  @Column('float', {
    name: 'CFIVALOR',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  cfivalor: number | null;

  @Column('text', { name: 'CFIDESCRICAO', nullable: true })
  cfidescricao: string | null;

  @Column('char', { name: 'CFILEGADO', nullable: true, length: 1 })
  cfilegado: string | null;

  @ManyToOne(() => TimimvEntity, (timimvEntity) => timimvEntity.timcfis)
  @JoinColumn([{ name: 'CFIIMOVEL', referencedColumnName: 'imvcodigo' }])
  cfiimovel2: TimimvEntity;

  @ManyToOne(() => TimclfEntity, (timclfEntity) => timclfEntity.timcfis)
  @JoinColumn([{ name: 'CFICLASSIFICADO', referencedColumnName: 'clfcodigo' }])
  cficlassificado2: TimclfEntity;

  @ManyToOne(() => TimcorEntity, (timcorEntity) => timcorEntity.timcfis)
  @JoinColumn([{ name: 'CLAGERENTECOR', referencedColumnName: 'corcodigo' }])
  clagerentecor: TimcorEntity;

  @ManyToOne(() => TimanuEntity, (timanuEntity) => timanuEntity.timcfis)
  @JoinColumn([
    { name: 'CFIIMOVEL', referencedColumnName: 'anuimovel' },
    { name: 'CFIANUNCIO', referencedColumnName: 'anucodigo' },
  ])
  timanu: TimanuEntity;
}
