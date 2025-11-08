import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimrenEntity } from './tIMREN.entity';

@Index('PK_TIMREP', ['repcodigo', 'repreneg'], { unique: true })
@Entity('TIMREP', { schema: 'SANKHYA' })
export class TimrepEntity {
  @Column('int', { primary: true, name: 'REPCODIGO' })
  repcodigo: number;

  @Column('int', { primary: true, name: 'REPRENEG' })
  repreneg: number;

  @Column('datetime', { name: 'REPDTVENC', nullable: true })
  repdtvenc: Date | null;

  @Column('float', { name: 'REPVLRJUROS', nullable: true, precision: 53 })
  repvlrjuros: number | null;

  @Column('float', { name: 'REPVLRDESDOB', nullable: true, precision: 53 })
  repvlrdesdob: number | null;

  @Column('float', { name: 'REPVLRAMORT', nullable: true, precision: 53 })
  repvlramort: number | null;

  @Column('float', { name: 'REPVLRSALDODEV', nullable: true, precision: 53 })
  repvlrsaldodev: number | null;

  @Column('float', { name: 'REPVLRBALAO', nullable: true, precision: 53 })
  repvlrbalao: number | null;

  @Column('int', { name: 'REPNUFIN', nullable: true })
  repnufin: number | null;

  @Column('char', { name: 'REPTIMORIGEM', nullable: true, length: 2 })
  reptimorigem: string | null;

  @ManyToOne(() => TimrenEntity, (timrenEntity) => timrenEntity.timreps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'REPRENEG', referencedColumnName: 'rencodigo' }])
  repreneg2: TimrenEntity;
}
