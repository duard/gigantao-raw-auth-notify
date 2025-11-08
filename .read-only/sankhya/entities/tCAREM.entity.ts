import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TcaturEntity } from './tCATUR.entity';
import { TcamatEntity } from './tCAMAT.entity';
import { TcaanoEntity } from './tCAANO.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TCAREM', ['dtrem', 'codmat'], { unique: true })
@Entity('TCAREM', { schema: 'SANKHYA' })
export class TcaremEntity {
  @Column('datetime', { primary: true, name: 'DTREM' })
  dtrem: Date;

  @Column('char', { primary: true, name: 'CODMAT', length: 10 })
  codmat: string;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcarems)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TcaturEntity, (tcaturEntity) => tcaturEntity.tcarems)
  @JoinColumn([{ name: 'CODTURMA', referencedColumnName: 'codturma' }])
  codturma: TcaturEntity;

  @ManyToOne(() => TcaturEntity, (tcaturEntity) => tcaturEntity.tcarems2)
  @JoinColumn([{ name: 'CODTURANT', referencedColumnName: 'codturma' }])
  codturant: TcaturEntity;

  @ManyToOne(() => TcamatEntity, (tcamatEntity) => tcamatEntity.tcarems)
  @JoinColumn([{ name: 'CODMAT', referencedColumnName: 'codmat' }])
  codmat2: TcamatEntity;

  @ManyToOne(() => TcaanoEntity, (tcaanoEntity) => tcaanoEntity.tcarems)
  @JoinColumn([{ name: 'CODANO', referencedColumnName: 'codano' }])
  codano: TcaanoEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcarems)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;
}
