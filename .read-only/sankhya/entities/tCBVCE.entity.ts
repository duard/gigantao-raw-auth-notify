import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcbvcedEntity } from './tCBVCED.entity';

@Index('PK_TCBVCE', ['codemp'], { unique: true })
@Entity('TCBVCE', { schema: 'SANKHYA' })
export class TcbvceEntity {
  @Column('int', { name: 'NUVINCULO', nullable: true })
  nuvinculo: number | null;

  @Column('varchar', { name: 'DESCRVINCULO', length: 40 })
  descrvinculo: string;

  @Column('int', { name: 'CODEMPPLACTA', nullable: true })
  codempplacta: number | null;

  @Column('varchar', { name: 'MASCCTAEXT', length: 50 })
  mascctaext: string;

  @Column('smallint', { primary: true, name: 'CODEMP', default: () => '(0)' })
  codemp: number;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('varchar', { name: 'GERARI157ECD', nullable: true, length: 1 })
  gerari157Ecd: string | null;

  @Column('datetime', { name: 'DTMUDAPLANO', nullable: true })
  dtmudaplano: Date | null;

  @OneToMany(() => TcbvcedEntity, (tcbvcedEntity) => tcbvcedEntity.codemp2)
  tcbvceds: TcbvcedEntity[];
}
