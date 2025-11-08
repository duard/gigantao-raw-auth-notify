import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TSICEU', ['codcencus', 'codemp', 'codusu'], { unique: true })
@Index('TSICEU_I01', ['codusu'], {})
@Index('TSICEU_I02', ['codemp'], {})
@Entity('TSICEU', { schema: 'SANKHYA' })
export class TsiceuEntity {
  @Column('int', { primary: true, name: 'CODCENCUS' })
  codcencus: number;

  @Column('smallint', { primary: true, name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsiceus, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tsiceus, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus2: TsicusEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tsiceus, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;
}
