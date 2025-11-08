import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcscpaEntity } from './tCSCPA.entity';

@Index('PK_TCSCSE', ['numcontrato', 'sequencia', 'codserv'], { unique: true })
@Entity('TCSCSE', { schema: 'SANKHYA' })
export class TcscseEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'CODSERV' })
  codserv: number;

  @Column('smallint', { name: 'PARCELAS' })
  parcelas: number;

  @Column('money', { name: 'VALOR', nullable: true })
  valor: number | null;

  @ManyToOne(() => TcscpaEntity, (tcscpaEntity) => tcscpaEntity.tcscses)
  @JoinColumn([
    { name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tcscpa: TcscpaEntity;
}
