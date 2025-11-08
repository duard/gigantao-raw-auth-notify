import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFPMA', ['codparc', 'marca', 'codprod'], { unique: true })
@Index('TGFPMA_I01', ['marca', 'codparc'], {})
@Entity('TGFPMA', { schema: 'SANKHYA' })
export class TgfpmaEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('char', { primary: true, name: 'MARCA', length: 10 })
  marca: string;

  @Column('float', { name: 'PERCDESC', precision: 53 })
  percdesc: number;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('int', { primary: true, name: 'CODPROD', default: () => '(0)' })
  codprod: number;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfpmas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
